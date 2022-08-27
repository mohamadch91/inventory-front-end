import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RelatedService from "../services/related.service.js";
import SharedTable from "../shared/SharedTable";
import toast from "react-hot-toast";
import Spinner from "../shared/Spinner";
import "./itemClass.scss";
import "./itemType.scss";
import "../styles/inputs.scss";
import { Trans } from "react-i18next";

function Parameters() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    RelatedService.getParameters()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("There is a problem loading data");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="item-class-page-param">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="page-title mb-3">
            <Trans>Facility:</Trans>
          </h2>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Description</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.facility?.map((item) => (
                  <>
                    <TableRow>
                      <TableCell>
                        <Link to={`/settings/params/facility-${item.id}`}>
                          {item.name} ({item.description})
                        </Link>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </SharedTable>
          </div>
          <h2 className="page-title-param text-left mb-3 mt-5">
            <Trans>Item</Trans>:
          </h2>
          <div>
            <SharedTable>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Trans>Description</Trans>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.item?.map((item) => (
                  <>
                    <TableRow>
                      <TableCell>
                        <Link to={`/settings/params/type-${item.id}`}>
                          {item.name} ({item.description})
                        </Link>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </SharedTable>
          </div>
        </>
      )}
    </div>
  );
}

export default Parameters;
